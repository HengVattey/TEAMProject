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
      status: '1401',
      tasks: this.generateTasks(12, '1401', ''),
      displayCount: 10,
      showingMore: false,
    },
    {
      name: 'Preparing',
      status: '1301',
      tasks: this.generateTasks(11, '1301', 'Sok Chamroeun'),
      displayCount: 10,
      showingMore: false,
    },
    {
      name: 'Ready To Pickup',
      status: '1201',
      tasks: this.generateTasks(10, '1201', 'Sok Chamroeun'),
      displayCount: 10,
      showingMore: false,
    },
  ];

  // Generate sample tasks
  generateTasks(count: number, status: string, ticketName: string): Task[] {
    return Array.from({ length: count }, (_, i) => ({
      ticketId: `${status.slice(0, 3).toUpperCase()}${i + 1}`,
      ticketName: ticketName,
      status,
      showMenu: false,
    }));
  }

  // Toggle the dropdown menu
  toggleMenu(task: Task): void {
    if (task.showMenu) {
      task.showMenu = false;
    } else {
      this.columns.forEach((column) => {
        column.tasks.forEach((t) => (t.showMenu = false));
      });
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

      // Check if the movement is valid
      if (currentColumn && targetColumn) {
        const canMove = this.canMoveTask(
          currentColumn.status,
          targetColumn.status
        );
        if (canMove) {
          // Remove the task from the current column
          currentColumn.tasks = currentColumn.tasks.filter(
            (item) => item.ticketId !== this.draggedItem!.ticketId
          );
          // Add the task to the target column with the new status
          targetColumn.tasks.push({ ...this.draggedItem, status: newStatus });
        } else {
          console.log(
            `Cannot move task from ${currentColumn.name} to ${targetColumn.name}`
          );
        }
      }
      this.draggedItem = null; // Reset dragged item
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

  // Check if a task can be moved from one status to another
  canMoveTask(fromStatus: string, toStatus: string): boolean {
    // Define valid transitions
    const validTransitions: any = {
      '1401': ['1301'], // Receive Order -> Preparing
      '1301': ['1201'], // Preparing -> Ready To Pickup
      '1201': ['1301', '1401'], // Ready To Pickup can go back to Preparing or Receive Order
    };

    // Allow backward movement without conditions
    if (toStatus === '1401' || toStatus === '1301') {
      return true; // Allow moving back to Receive Order or Preparing
    }

    return validTransitions[fromStatus]?.includes(toStatus) || false;
  }
}
