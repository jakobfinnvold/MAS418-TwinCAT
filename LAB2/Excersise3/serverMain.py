import socket

counter = 0 ## Introduce counter ##

def handle_client(client_socket):
    global counter
    while True:
        data = client_socket.recv(1024)
        if not data:
            break
        counter += 1
        print(f"Received: {data}, counter: {counter}")
        client_socket.sendall(str(counter).encode())

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 1234))
server_socket.listen(5)
print("Server is listening...")

while True:
    client_socket, address = server_socket.accept()
    print(f"Connection from {address}")
    client_socket.sendall(b"Welcome to the server")
    client_thread = threading.Thread(target=handle_client, args=(client_socket,))
    client_thread.start()
