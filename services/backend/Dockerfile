FROM golang:latest 
WORKDIR /go/src/app 
COPY . .

RUN go get github.com/gorilla/mux
RUN go build -o main .
CMD ["/go/src/app/main"]