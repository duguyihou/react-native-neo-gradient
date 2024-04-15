@objc(GradientViewManager)
class GradientViewManager: RCTViewManager {

  override func view() -> (UIView) {
    return GradientViewProxy()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
