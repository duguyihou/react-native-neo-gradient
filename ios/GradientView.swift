import SwiftUI

struct GradientView: View {
  @EnvironmentObject var store: Store

  var body: some View {
    LinearGradient(gradient: Gradient(colors: store.colors), startPoint: .top, endPoint: .bottom)
  }
}
