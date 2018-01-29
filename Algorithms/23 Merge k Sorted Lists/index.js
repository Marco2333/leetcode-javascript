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
// 最简单的方法，每次取最小的元素，依次构建新的链表，可能会超时。时间复杂度O(mn)
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