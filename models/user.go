package models

type User struct {
	Username string `json:"username"`
	Password []byte `json:"-"`
	Adresses []byte `json:"adresses"`
	Email    string `json:"email"`
}
