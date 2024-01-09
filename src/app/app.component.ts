import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // カウンター変数を宣言し、0で初期化
  counter: number = 0;

  // カウントを増やすメソッド
  countUp() {
    this.counter++;
  }

  // カウントを減らすメソッド
  countDown() {
    this.counter--;
  }
}
