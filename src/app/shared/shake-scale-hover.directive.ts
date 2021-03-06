import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core'
import { AnimationBuilder, AnimationMetadata, style, animate, keyframes } from '@angular/animations'

@Directive({
  selector: '[shakeScaleHover]'
})
export class ShakeScaleHoverDirective {
  @HostBinding('style.cursor')
  cursor = 'pointer'

  @HostListener('mouseenter')
  onmouseenter() {
    const factory = this.builder.build(this.shakeScale())
    const player = factory.create(this.el.nativeElement)
    player.play()
  }

  @HostListener('mouseleave')
  onmouseleave() {
    const factory = this.builder.build(this.reset())
    const player = factory.create(this.el.nativeElement)
    player.play()
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private shakeScale(): AnimationMetadata {
    return animate(
      '800ms',
      keyframes(
        [].concat(
          style({ transform: '*' }),
          Array.from(Array(6).keys()).map((n, i) =>
            style({ transform: `rotateZ(${(-1) ** i * (6 / (n + 1)) * 3}deg) scale(1.2)` })
          ),
          style({ transform: 'rotateZ(0) scale(1.2)' })
        )
      )
    )
  }

  private reset(): AnimationMetadata {
    return animate('150ms ease-in-out', style({ transform: 'none' }))
  }
}
