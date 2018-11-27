import { Pipe, PipeTransform } from '@angular/core';
import { FullList } from '../../models';

/**
 * Generated class for the FilterCompletedTaskPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterCompletedTask',
  pure: false,
})
export class FilterCompletedTaskPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(task: FullList [], completed: boolean, ...args) {
    
    return task.filter(data => {
      return data.finished === completed;
    });
  }
}
