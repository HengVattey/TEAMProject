import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Task {
  ticketId: string;
  ticketName: string;
  status: string;
  showMenu?: boolean; // Optional property to track dropdown visibility
}

@Component({
  selector: 'app-receive-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receive-order-list.component.html',
  styleUrls: ['./receive-order-list.component.css'],
})
export class ReceiveOrderListComponent {
  draggedItem: Task | null = null;

  columns = [
    {
      name: 'Receive Order',
      status: 'Ordered',
      tasks: this.generateTasks(12, 'Ordered', 'Items'),
      displayCount: 10,
      showingMore: false,
    },
    {
      name: 'Preparing',
      status: 'Booked',
      tasks: this.generateTasks(11, 'Booked', 'Items'),
      displayCount: 10,
      showingMore: false,
    },
    {
      name: 'Ready to Pickup',
      status: 'Ready',
      tasks: this.generateTasks(10, 'Ready', 'Items'),
      displayCount: 10,
      showingMore: false,
    },
  ];

  // Generate sample tasks
  generateTasks(count: number, status: string, ticketName: string): Task[] {
    return Array.from({ length: count }, (_, i) => ({
      ticketId: `${status.slice(0, 3).toUpperCase()}-${i + 1}`,
      ticketName: ticketName,
      status,
      showMenu: false,
    }));
  }

  // Toggle the dropdown menu
  toggleMenu(task: Task): void {
    // If the menu is already open for the clicked task, close it
    if (task.showMenu) {
      task.showMenu = false;
    } else {
      // Close all other menus first
      this.columns.forEach((column) => {
        column.tasks.forEach((t) => (t.showMenu = false));
      });
      // Open the clicked task's menu
      task.showMenu = true;
    }
  }

  // View task action
  viewTask(task: Task): void {
    console.log('Viewing task:', task);
  }

  // Delete task action
  deleteTask(task: Task, column: any): void {
    column.tasks = column.tasks.filter((t: Task) => t !== task);
  }

  // Handle drag start
  onDragStart(task: Task): void {
    this.draggedItem = task;
  }

  // Handle drop
  onDrop(event: Event, newStatus: string): void {
    event.preventDefault();
    if (this.draggedItem) {
      const currentColumn = this.columns.find(
        (col) => col.status === this.draggedItem!.status
      );
      const targetColumn = this.columns.find((col) => col.status === newStatus);
      if (currentColumn && targetColumn) {
        currentColumn.tasks = currentColumn.tasks.filter(
          (item) => item.ticketId !== this.draggedItem!.ticketId
        );
        targetColumn.tasks.push({ ...this.draggedItem, status: newStatus });
      }
      this.draggedItem = null;
    }
  }

  onDragOver(event: Event): void {
    event.preventDefault();
  }

  toggleMoreLess(status: string): void {
    const column = this.columns.find((col) => col.status === status);
    if (column) {
      column.showingMore = !column.showingMore;
      column.displayCount = column.showingMore ? column.tasks.length : 10;
    }
  }
}
