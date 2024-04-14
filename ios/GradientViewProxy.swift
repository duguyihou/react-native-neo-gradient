import SwiftUI

class Store: ObservableObject {
  @Published var colors: [Color] = []
}

final class GradientViewProxy: UIView {
  private var store: Store = .init()
  private var gradientView: UIView?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    let vc = UIHostingController(rootView: GradientView().environmentObject(store))
    vc.view.frame = bounds
    addSubview(vc.view)
    gradientView = vc.view
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    gradientView?.frame = bounds
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc var colors: NSArray! {
    didSet {
      print("🐵 --- colors \(colors)")
      store.colors = [Color.red, Color.blue]
    }
  }
}
