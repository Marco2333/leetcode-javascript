/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var carryBit = 0,
		head = p = null;

	while(l1 || l2) {
		var a1 = l1 ? l1.val : 0,
			a2 = l2 ? l2.val : 0,
			sum = a1 + a2 + carryBit;

		if(head) {
			p.next = new ListNode(sum % 10);
			p = p.next;
		}
		else {
			head = p = new ListNode(sum % 10);
		}
		
		carryBit = ~~(sum / 10);

		if(l1) {
			l1 = l1.next;
		}
		if(l2) {
			l2 = l2.next;
		}
	}

	if(carryBit) {
		p.next = new ListNode(1);
	}

	return head;
};