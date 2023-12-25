const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let current = this.list;

    if (!current) {
      this.list = new ListNode(value);
      return this;
    }

    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }

  dequeue() {
    const dequeued = this.list;
    this.list = this.list.next;
    return dequeued.value;
  }
}


module.exports = {
  Queue
};
