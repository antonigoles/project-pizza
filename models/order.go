package models

type MenuItem struct {
	Name          string
	PossibleSizes []int
	Price         float64
}

type Topping struct {
	Name  string
	Price float64
}

type OrderItem struct {
	MenuItem MenuItem
	Topping  Topping
}

type Order struct {
	Note      string    `json:"note"`
	AdressID  uint      `json:"adressid"`
	UserID    uint      `json:"userid"`
	OrderItem OrderItem `json:"orderitem"`
	Price     float64   `json:"price"`
}
