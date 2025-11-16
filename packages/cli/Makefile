lint:
	go vet ./...

format:
	go fmt ./...

build:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/ig ./main.go

install:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/ig ./main.go
	mkdir -p ~/bin
	cp ./bin/ig ~/bin/
	chmod +x ~/bin/ig
	export PATH="$(HOME)/bin:$(PATH)"
