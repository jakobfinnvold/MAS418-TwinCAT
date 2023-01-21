#include <stdio.h>
#include <mqueue.h>
#include <stdlib.h>
#include <time.h>

// https://w3.cs.jmu.edu/kirkpams/OpenCSF/Books/csf/html/MQueues.html

struct sender_data {
    int ID;
    double temp;
};


int main()
{
    mqd_t mqd;
    struct sender_data msg;

    msg.ID = 20;
    msg.temp = 22.3;

    // Message queue open
    mqd = mq_open("/mas418queue", O_CREAT | O_WRONLY, 0600, NULL);
    if (mqd == -1) {
        printf("Error opening queue");
        exit(1);
    }
    printf("Queue open\n");

    // Sending msg
    if (mq_send(mqd, (const char *)&msg, sizeof (struct sender_data), 11) == -1) {
        printf("Error sending message!");
        exit(1);
    }


    printf("Message sendt\n");

    // Waiting
    printf("Waiting for message\n");


    if (mq_receive(mqd, (char*) &msg, sizeof(struct sender_data), NULL) == -1) {
            printf("Error recieving message!");
            exit(1);
        }

    printf("Message recieved!\n");
    printf("Person ID: %d, Measured Temperature: %f", msg.ID, msg.temp);

    if (mq_close(mqd) == -1) {
        printf("Error closing the queue");
        exit(1);
    }

    return 0;
}
