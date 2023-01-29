import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(("server_ip", 1234))
print(client_socket.recv(1024).decode())

while True:
    client_socket.sendall(b"key pressed") ## Key pressed -> counter incremented
    print(client_socket.recv(1024).decode())
