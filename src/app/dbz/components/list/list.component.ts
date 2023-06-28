import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Output()
    public idDelete: EventEmitter<string> = new EventEmitter();

    @Input()
    public charactersList: Character[] = [{name:'Trunks'
    ,power: 1000}]


    onDeleteCharacter(index?:string ): void {
        if (!index) return;
        console.log('Delete character: ', index);
        this.idDelete.emit(index);
    }

}
