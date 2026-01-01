import { Component } from '@angular/core';
import { Hero } from '../../COMPONENTS/hero/hero';
import { FeaturesPreview } from '../../COMPONENTS/features-preview/features-preview';
import { PricingPreview } from '../../COMPONENTS/pricing-preview/pricing-preview';
import { CallToAction } from '../../COMPONENTS/call-to-action/call-to-action';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturesPreview, PricingPreview, CallToAction],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
