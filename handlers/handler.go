package handlers

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Menu(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "menu")
}
func AddMenuItem(w http.ResponseWriter, r *http.Request) {

}
func Endpoints() {
	mux := mux.NewRouter().StrictSlash(true)
	mux.HandleFunc("/", Menu)
	mux.HandleFunc("/addMenuItem/", AddMenuItem)
}
