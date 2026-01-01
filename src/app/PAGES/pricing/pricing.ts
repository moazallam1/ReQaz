import { Component } from '@angular/core';
import { PricingPreview } from '../../COMPONENTS/pricing-preview/pricing-preview';
import { CallToAction } from "../../COMPONENTS/call-to-action/call-to-action";

@Component({
  selector: 'app-pricing',
  imports: [PricingPreview, CallToAction],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {

}
