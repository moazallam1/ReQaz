import { Component } from '@angular/core';
import { FeaturesPreview } from '../../COMPONENTS/features-preview/features-preview';
import { CallToAction } from "../../COMPONENTS/call-to-action/call-to-action";

@Component({
  selector: 'app-features',
  imports: [FeaturesPreview, CallToAction],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

}
