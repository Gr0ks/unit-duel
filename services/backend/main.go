package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

type ApiVersion struct {
	ID      string `json:"id"`
	Version string `json:"version"`
}

type ApiVersions struct {
	CurrentVersion ApiVersion   `json:"currentVersion"`
	Versions       []ApiVersion `json:"versions"`
}

var versions ApiVersions

func main() {
	fmt.Println("START")
	resp, err := http.Get("https://google.com")
	check(err)
	body, err := ioutil.ReadAll(resp.Body)
	check(err)
	fmt.Println(len(body))
	r := mux.NewRouter()
	versions.CurrentVersion = ApiVersion{ID: "v1", Version: "v0.0.1"}
	versions.Versions = append(versions.Versions, ApiVersion{ID: "v0", Version: "v0.0.0"})
	versions.Versions = append(versions.Versions, ApiVersion{ID: "v1", Version: "v0.0.1"})
	r.HandleFunc("/api", getApiVersions).Methods("GET")
	r.HandleFunc("/api/{id}", getApiVersion).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func check(err error) {
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func getApiVersions(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(versions)
}

func getApiVersion(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(r)
	for _, item := range versions.Versions {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&ApiVersion{})
}
