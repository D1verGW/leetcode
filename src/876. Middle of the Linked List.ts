import { describe, test, expect } from '@jest/globals';

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function arrayToListNode(arr: number[]): ListNode {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function testMiddleNode(head: number[], expected: number[]): void {
    expect(middleNode(arrayToListNode(head))).toEqual(arrayToListNode(expected));
}

describe('876. Middle of the Linked List', () => {
    test(`Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.`, () => {
        testMiddleNode([1], [1]);
        testMiddleNode([1, 2], [2]);
        testMiddleNode([1, 2, 3], [2, 3]);
        testMiddleNode([1, 2, 3, 4], [3, 4]);
        testMiddleNode([1, 2, 3, 4, 5], [3, 4, 5]);
        testMiddleNode([1, 2, 3, 4, 5, 6], [4, 5, 6]);
        testMiddleNode([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7]);
        testMiddleNode([1, 2, 3, 4, 5, 6, 7, 8], [5, 6, 7, 8]);
        testMiddleNode([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 6, 7, 8, 9]);
        testMiddleNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 7, 8, 9, 10]);
    });
});
