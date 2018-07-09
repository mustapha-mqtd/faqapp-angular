import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [
      /*{
        'text': 'What is your name?',
        'answer': 'my name is Steph',
        'hide': false
      },
      {
        'text': 'What is your favorite color?',
        'answer': 'my favorite color is blue',
        'hide': true
      },
      {
        'text': 'What is your favorite language?',
        'answer': 'my avorite language is Html/css',
        'hide': true
      }*/
    ];
  }

  // Get Questions from LS 
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  // All Questions to LS 
  addQuestion(question:Question){
    // this.questions.push(question);
    this.questions.unshift(question);

    //Inir local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      //push new question
      questions.unshift(question);
      //set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'))
      //Add new question
      questions.unshift(question);
      //Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Questions from LS 
  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}