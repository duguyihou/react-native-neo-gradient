import SwiftUI

struct GradientView: View {
  @EnvironmentObject var store: Store

  var body: some View {
    LinearGradient(gradient: Gradient(colors: [Color.red, Color.blue]), startPoint: .top, endPoint: .bottom)
  }
}
