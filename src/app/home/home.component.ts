import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../model/user.repository';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    public currentUser: User;

  constructor(
    private userRepository: UserRepository
  ) { }

  ngOnInit() {
  }

  get users() {
    return this.userRepository.getUsers();
  }

  user(id) {
    this.currentUser = this.userRepository.getUser(id);
  }
}
