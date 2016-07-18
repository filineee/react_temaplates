package main

import (
    "fmt"
    "net/http"
    "log"
    "strings"
    "io/ioutil"
)


var addr = "localhost"
var port = "8081"

func main() {
    fmt.Println("Starting http server")
    mux := http.NewServeMux()
    mux.Handle("/dump", http.HandlerFunc(handleDump))
    mux.Handle("/echo", http.HandlerFunc(handleEcho))
    log.Fatal(http.ListenAndServe(addr + ":" + port, mux))
}

func handleDump(w http.ResponseWriter, req *http.Request) {

    //w.Header().Add("Content-Type", "text/html; charset=utf-8")
    w.Header().Add("Server", "Request dump server")

    fmt.Fprintln(w, "Dump запроса")
    fmt.Fprintf(w, "Запрос адреса: %s%s\n", req.Host, req.URL.Path)
    fmt.Fprintf(w, "Метод запроса: %s\n", req.Method)
    fmt.Fprintf(w, "Удаленный адрес: %s\n", req.RemoteAddr)
    fmt.Fprintln(w, "Кодировка: [" + strings.Join(req.TransferEncoding, ",") + "]")
    fmt.Fprintln(w, "Referer: ", req.Referer())
    fmt.Fprintln(w, "UserAgent: ", req.UserAgent())
    fmt.Fprintln(w, "Параметры запроса:");
    for name, val := range req.URL.Query() {
        fmt.Fprintf(w, "\t[ %s = %s ]\n", name, val)
    }
    fmt.Fprintln(w, "Cookies:")
    cookies := req.Cookies()
    for _, c := range cookies {
        fmt.Fprintf(w, "\t [ %s = %s ]\n", c.Name, c.Value)
    }

    switch req.Method {
    case "GET":
    case "POST", "PUT", "PATCH":
        req.ParseMultipartForm(1024)
        req.ParseForm()
        fmt.Fprintln(w, "Form:")
        for n, v := range req.Form {
            fmt.Fprintf(w, "\t%s = %s\n", n, v)
        }
        //fmt.Fprintf(w, "%+v\n", req.Form)

        fmt.Fprintln(w, "PostForm")
        for n, v := range req.PostForm {
            fmt.Fprintf(w, "\t%s = %s\n", n, v)
        }

        //fmt.Fprintln(w, "MultipartForm:")
        //for n, v := range req.MultipartForm {
            //fmt.Fprintf(w, "\t%s = %s\n", n, v)
        //}
    default:
    }
    fmt.Fprintln(w, "Body:")
    b, _ := ioutil.ReadAll(req.Body)
    defer req.Body.Close()
    fmt.Fprintf(w, "%#v\n", b)
    fmt.Fprintln(w, "------------------");
}

func handleEcho(w http.ResponseWriter, req *http.Request) {
}
