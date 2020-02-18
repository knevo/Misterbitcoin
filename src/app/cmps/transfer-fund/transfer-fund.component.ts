import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  fund: number
  @Input() contactName: string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onTransferFund() {
    this.userService.addMove(this.contactName, this.fund)
    this.fund = null;
  }
}
