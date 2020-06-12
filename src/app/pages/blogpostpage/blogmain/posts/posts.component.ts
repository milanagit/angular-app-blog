import { Component, OnInit } from '@angular/core';
import { Post } from './post/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Array<Post> = [
    {
      id: 1,
      title: 'Blog post 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    },
    {
      id: 2,
      title: 'Blog post 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    },
    {
      id: 3,
      title: 'Blog post 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
