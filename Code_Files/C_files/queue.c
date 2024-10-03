#include <stdio.h>
#include <stdlib.h>

#define n 4
int queue[n];
int front = -1;
int rear = -1;

void display() {
    for (int i = front + 1; i <= rear; i++) {
        printf("element %d is : %d \n", i, queue[i]);
    }
}

void enqueue(int value) {
    if (rear == n - 1) {
        printf("Queue is full\n");
    } else {
        rear++;
        queue[rear] = value;
        printf("Inserted value: %d\n", value);
    }
}

void dequeue() {
    if (front == rear) {
        printf("Queue is underflow\n");
        front = rear = -1;
    } else {
        front++;
        printf("Dequeued value: %d\n", queue[front]);
    }
}

void search(int value) {
    if (rear == -1) {
        printf("Queue is empty\n");
        return;
    }

    for (int i = front + 1; i <= rear; i++) {
        if (queue[i] == value) {
            printf("Found %d at position %d\n", value, i);
            return;
        }
    }
    printf("%d not found in the queue\n", value);
}

int main() {
    enqueue(2);
    enqueue(4);
    enqueue(5);
    enqueue(6);
    dequeue();
    search(8);
    display();
    return 0;
}
