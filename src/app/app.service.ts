import { Injectable } from '@angular/core';
import { Post } from './pages/blogpostpage/blogmain/posts/post/post';
import { Popup } from './pages/blogpostpage/addeditpopup/popup/popup';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public addeditpopup: Array<Popup> = [
    {
      editId: 1,
      editTitle: 'Blog post 1',
      editText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    },
    {
      editId: 2,
      editTitle: 'Blog post 2',
      editText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    },
    {
      editId: 3,
      editTitle: 'Blog post 3',
      editText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis ac elit auctor egestas ut in turpis. Nunc non efficitur metus. Curabitur dapibus metus sed ante luctus, ac porta dui tristique. Sed eu sagittis lorem, non interdum nibh. Donec cursus dolor at interdum posuere. Nulla euismod rutrum mauris tincidunt lobortis. Ut a imperdiet risus. Phasellus vitae tellus hendrerit, iaculis lorem ut, tincidunt metus. Nulla nec semper magna. Suspendisse eget arcu ornare, luctus eros quis, placerat ligula. Vivamus varius tristique velit, porta viverra dolor commodo eu. Proin mattis tempus nulla, eu feugiat lacus feugiat ut. Etiam vulputate porta mattis. Morbi condimentum felis lectus, eu finibus libero tincidunt non. Quisque finibus lorem vitae augue auctor, id lobortis ligula pulvinar. Fusce at ornare orci, quis fermentum neque. Proin rutrum sem in feugiat volutpat. Morbi ullamcorper ultrices ipsum, sed venenatis augue lacinia non. Donec vulputate ornare placerat.'
    }
  ];

  public posts: Array<Post> = [
    {
      id: this.addeditpopup[0],
      title: this.addeditpopup[0],
      text: this.addeditpopup[0]
    },
    {
      id: this.addeditpopup[1],
      title: this.addeditpopup[1],
      text: this.addeditpopup[1]
    },
    {
      id: this.addeditpopup[2],
      title: this.addeditpopup[2],
      text: this.addeditpopup[2]
    }
  ];

  constructor() { }
}
