import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush   
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges{

  @Input() existsToken: boolean;
  contentHeight: number;
  tokenExists: boolean = false;

  @ViewChild('content') elementView: ElementRef;

  //@Output() navbarHeight = new EventEmitter <number>();

  @Input() reloadNavbar:boolean;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnChanges(){
    this.checkToken();
  }

  checkToken(){
    const token = localStorage.getItem("Token");
    if(token)
    {
      this.tokenExists = true;
    }
    else{
      this.tokenExists = false;
    }
  }

  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.removeItem("Token");
    this.checkToken();
    this.router.navigate(['/']);
  }

  ngAfterViewInit() {
    this.contentHeight = this.elementView.nativeElement.offsetHeight;
    //console.log(this.contentHeight);
    //this.navbarHeight.emit(this.contentHeight);
  }

}
