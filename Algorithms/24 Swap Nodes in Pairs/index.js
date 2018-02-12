/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if(head == null || head.next == null) {
		return head;
	}

	var p1 = head,
		p2 = p1.next,
		p3 = null,
		head = head.next;
		
	while(p2 != null) {
		p1.next = p2.next;
		p2.next = p1;

		if(p3 != null) {
			p3.next = p2;
		}

		p3 = p1;
		p1 = p1.next;

		if(p1 == null) {
			p2 = null;
		}
		else {
			p2 = p1.next;
		}
	}

	return head;
};