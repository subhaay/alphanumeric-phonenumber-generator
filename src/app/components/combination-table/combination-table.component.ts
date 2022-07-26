import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {GenerateCombService} from "../../services/generate-comb.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-combination-table',
  templateUrl: './combination-table.component.html',
  styleUrls: ['./combination-table.component.scss']
})
export class CombinationTableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;
  private loadingState = new BehaviorSubject<boolean>(false);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private generateComb: GenerateCombService) {
  }

  ngOnInit(): void {
    this.loadingState.subscribe((next: boolean) => {
      this.isLoading = next;
    });
    this.loadingState.next(true);
    this.generateComb.phoneNumber$.subscribe(value => {
      this.generateCombination(value);
    });
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  generateCombination(phone: string) {
    this.loadingState.next(true);
    this.generateComb.getPhoneNumber(phone).subscribe(res => {
      this.loadingState.next(false);
      this.dataSource.data = res;
    }, error => {
      this.loadingState.next(false);
    });
  }
}
