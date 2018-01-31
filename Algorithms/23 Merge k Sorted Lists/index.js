/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 最简单的方法，每次取最小的元素，依次构建新的链表，可能会超时。时间复杂度O(nk^2)
var mergeKLists = function(lists) {
	var i, min, minIndex,
		head = p = null,
		len = lists.length;
	
	while(true) {
		minIndex = -1;
		min = Infinity;

		for(i = 0;i < lists.length;i++) {

			if(lists[i] != null) {
				if(lists[i].val < min) {
					min = lists[i].val;
					minIndex = i;
				}
			}
			else {
				lists.splice(i, 1);
				i--;
			}
		}

		if(min < Infinity) {
			if(head == null) {
				head = p = new ListNode(min);
			}
			else {
				p.next = new ListNode(min);
				p = p.next;
			}

			lists[minIndex] = lists[minIndex].next;
		}
		else {
			return head;
		}
	}
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

// 归并法，时间复杂度O(nklogk)，n为链表的平均长度
var mergeKLists = function(lists) {
	var i, len,
		resArr = [];

	if(lists == null || lists.length === 0) {
		return null;
	}

	while(lists.length !== 1) {
		len = lists.length;

		for(i = 0;i < len;i += 2) {
			resArr.push(mergeTwoLists(lists[i], lists[i + 1]));
		}

		lists = resArr;
		resArr = [];
	}

	return lists[0];
};