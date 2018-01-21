/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	var i = 0,
		p1 = p2 = head;

	while(true) {
		if(i > n && p2 != null) {
			p1 = p1.next;
		}

		if(p2 == null) {
			if(p1.next == null) {
				return null;
			}

			if(i <= n) {
				p1 = p1.next;
				
				return p1;
			}

			p1.next = p1.next.next;

			return head;
		}

		p2 = p2.next;

		i++;
	}
};