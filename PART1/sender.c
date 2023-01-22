#include <stdio.h>
#include <mqueue.h>
#include <stdlib.h>
#include <time.h>

typedef struct sender_data {
    int ID;
    double temp;
} Msg;


int main()
{

    /* Set attributes */
    struct mq_attr attributes = {
        .mq_flags = 0,
        .mq_maxmsg = 10,
        .mq_curmsgs = 0,
        .mq_msgsize = sizeof (Msg)
    };

    mqd_t mqd;

    /* Populate struct message */
    Msg message;
    message.ID = 10;
    message.temp = 22.30;


    /* Message queue open */
    mqd = mq_open("/mas418queue", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR, &attributes);
    if (mqd == -1) {
        printf("Error opening queue");
        exit(1);
    }

    printf("Queue open\n");

    /* Sending msg with priority 1*/
    if (mq_send(mqd, (const char *)&message, sizeof (message), 1) == -1) {
        printf("Error sending message!");
        exit(1);
    }


    printf("Message sendt\n");

    /* Closing queue */
    if (mq_close(mqd) == -1) {
        printf("Error closing the queue");
        exit(1);
    }

    return 0;
}
