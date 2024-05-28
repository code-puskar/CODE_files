#include <stdio.h>
#include <stdlib.h>

struct Node {
  struct Node* prev;
  int data;
  struct Node* next;
};

int main() {
                     //yeh Thoda EAsy hai dekh dhyaan se samajh jayega...
  struct Node node1 = {NULL,10, NULL};
  struct Node node2 = {NULL,20, NULL};
  struct Node node3 = {NULL,30, NULL};

  node1.next = &node2;
  node2.next = &node3;
  node3.next = NULL;
  node1.prev=NULL;
  node2.prev=&node1;
  node3.prev=&node2; 

  // Set head pointer (optional, but recommended for easier access)
  struct Node* head = &node1;

  struct Node* current = head;
  printf("Doubly Linked List: ");
  do {
    printf("%d ", current->data);
    current = current->next;
  } while (current != head);
  printf("\n");

  return 0;
}
