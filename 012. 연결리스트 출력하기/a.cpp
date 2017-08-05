#include <cstdlib>
#include <cstdio>

typedef struct _node {
	int key;
	struct _node *next;
} node_t;

node_t *head = NULL, *tail = NULL;

void insert_node(int n){
	node_t *new_node = (node_t *) malloc(sizeof(node_t));

	new_node -> key = n;
	new_node -> next = NULL;

	if( head == NULL ){
		head = new_node;
		tail = new_node;
	} else {
		tail -> next = new_node;
		tail = new_node;
	}
}

int delete_node(){
	node_t *node;
	int r;

	if(head == NULL){
		return -1;
	}

	node = head;
	head = head -> next;

	// 노드가 하나만 있었다면
	// head, tail이 같은 것을 가르키고 있었기 때문에
	// tail도 NULL로 변경해야 함
	if( head == NULL ){
		tail = NULL;
	}

	r = node -> key;
	free(node);
	return r;
}

void print_list(node_t* from) {
	
	if ( from == NULL ){
		return;
	} else {
		print_list(from -> next);
		printf("%d ", from -> key );
	}
}


int main(){
	int number, r;

	do {
		printf("input number: ");
		scanf("%d", &number);

		if( number > 0 ){
			insert_node(number);
		} else if ( number == 0 ) {
			r = delete_node();
			printf("[%d]\n", r);
		} else {
			print_list(head);
		}
	} while ( number >= 0 );
	return 0;
}

