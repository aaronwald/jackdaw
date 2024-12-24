import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RookService } from './rook.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [RookService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jackdaw';

  constructor (private rookService: RookService) {
    console.log('app component');
    var statusS = rookService.getStatus();
    statusS.subscribe({
      next: msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      error: err => console.log('error' + err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
     });
  }
}
