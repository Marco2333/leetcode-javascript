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
var mergeTwoLists = function(l1, l2) {
	var val, head, p;

	if(l1 != null || l2 != null) {
		if(l1 != null && l2 != null) {
			if(l1.val <= l2.val) {
				val = l1.val;
				l1 = l1.next;
			}
			else {
				val = l2.val;
				l2 = l2.next;
			}
		}
		else if(l1 != null) {
			val = l1.val;
			l1 = l1.next;
		}
		else {
			val = l2.val;
			l2 = l2.next;
		}

		head = p = new ListNode(val);
	}
	else {
		return null;
	}

	while(l1 != null && l2 != null) {
		if (l1.val <= l2.val) {
			p.next = new ListNode(l1.val);
			p = p.next;
			l1 = l1.next;
		} else {
			p.next = new ListNode(l2.val);
			p = p.next;
			l2 = l2.next;
		}
	}
	
	while(l1 != null) {
		p.next = new ListNode(l1.val);
		p = p.next;
		l1 = l1.next;
	}

	while(l2 != null) {
		p.next = new ListNode(l2.val);
		p = p.next;
		l2 = l2.next;
	}

	return head;
};


var mergeTwoLists = function(l1, l2) {
	var val, head = p = null;

	while(l1 != null || l2 != null) {
		if(l1 != null && l2 != null) {
			if(l1.val <= l2.val) {
				val = l1.val;
				l1 = l1.next;
			}
			else {
				val = l2.val;
				l2 = l2.next;
			}
		}
		else if(l1 != null) {
			val = l1.val;
			l1 = l1.next;
		}
		else {
			val = l2.val;
			l2 = l2.next;
		}

		if(head == null) {
			head = p = new ListNode(val);
		}
		else {
			p.next = new ListNode(val);
			p = p.next;
		}
	}

	return head;
};