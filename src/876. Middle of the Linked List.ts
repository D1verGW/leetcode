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

describe(`876. Middle of the Linked List. Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.`, () => {
    test.each([
        { head: [1], expected: [1] },
        { head: [1, 2], expected: [2] },
        { head: [1, 2, 3], expected: [2, 3] },
        { head: [1, 2, 3, 4], expected: [3, 4] },
        { head: [1, 2, 3, 4, 5], expected: [3, 4, 5] },
        { head: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6] },
        { head: [1, 2, 3, 4, 5, 6, 7], expected: [4, 5, 6, 7] },
        { head: [1, 2, 3, 4, 5, 6, 7, 8], expected: [5, 6, 7, 8] },
        { head: [1, 2, 3, 4, 5, 6, 7, 8, 9], expected: [5, 6, 7, 8, 9] },
    ])(`$head => $expected`, ({ head, expected }) => {
        expect(middleNode(arrayToListNode(head))).toEqual(arrayToListNode(expected));
    });
});
