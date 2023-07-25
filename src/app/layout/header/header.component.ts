import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  MenuItems = {
    mainItems : [
         {name: 'ABOUT',  class: 'active',
         subItems: [
          {name: 'Leadership Team', link: ''},
          {name: 'Leadership Video', link: ''},
          {name: 'News Room', link: ''},
          {name: 'Vision 2030', link: ''},
        ]
        },

         {name: 'SERVICES',   class: '',
         subItems: [
          {name: 'Artificial Intelligence', link: ''},
          {name: 'Internet of Things', link: ''},
          {name: 'Robotic Process Automation', link: ''},
          {name: 'Metaverse', link: ''},
          {name: 'AR/VR', link: ''},
          {name: 'Data Analytics', link: ''},
          {name: 'Conversational AI', link: ''},
          {name: 'Application Services', link: ''},
          {name: 'Sustainability/ Net Zero', link: ''},
          {name: 'Technology Consulting', link: ''},
          {name: 'Change Management', link: ''},
        ]},

         {name: 'INDUSTRIES',  class: '',
         subItems: [
          {name: 'Smart City', link: ''},
          {name: 'Fintech', link: ''},
          {name: 'Insurance', link: ''},
          {name: 'Manufacturing', link: ''},
          {name: 'Fit Tech', link: ''},
          {name: 'Banking', link: ''},
          {name: 'Healthcare', link: ''},
          {name: 'Life Sciences', link: ''},
          {name: 'Energy', link: ''},
          {name: 'Real Estate', link: ''},
          {name: 'Retail', link: ''},
          {name: 'Public Services', link: ''},
          {name: 'Logistics', link: ''},
          {name: 'Education', link: ''},
          {name: 'Construction', link: ''},
          {name: 'Gaming', link: ''},
          {name: 'Tourism', link: ''},
          {name: 'Esports', link: ''},
        ]},

         {name: 'WORK',  class: '',
         subItems: [
          {name: 'Supply Chain Platform', link: ''},
          {name: 'SaaS Platform (ERP + IoT)', link: ''},
          {name: 'Remote Patient Monitoring', link: ''},
          {name: 'ERP Suite', link: ''},
          {name: 'Smart Parking', link: ''},
          {name: 'Fleet management platform', link: ''},
          {name: 'Conversational AI ', link: ''},
        ]
        },


     ]

   }




  constructor() { }

  ngOnInit(): void {
  }

}
