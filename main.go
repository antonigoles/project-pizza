package main

func main() {
  
  r := handlers.Endpoints()
	fmt.Println("Server is running..")
	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Fatalln("sth went wrong sry")
	}

}
