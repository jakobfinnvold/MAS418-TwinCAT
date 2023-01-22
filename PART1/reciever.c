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
    /* Message queue open */
    mqd = mq_open("/mas418queue", O_CREAT | O_RDONLY, S_IRUSR | S_IWUSR, &attributes);
    if (mqd == -1) {
        printf("Error opening queue");
        exit(1);
    }

    /* Initializing buffer to hold recieved message */
    Msg message;

    /* Opening recieved*/
    if(-1 == (mq_receive(mqd, (char *)&message, sizeof (message), NULL))) {
        printf("Error recieving message!");
        exit(1);
    };

    /* Printing message from buffer */
    printf("Person ID is: %d, Measured temperature is: %f", message.ID, message.temp); 
    
    /* Closing queue */
    mq_close(mqd); 

    return 0; 

}
