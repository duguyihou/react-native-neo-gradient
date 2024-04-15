package com.gradient

import android.content.Context
import android.graphics.Color
import android.view.View
import androidx.compose.material3.Text
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class GradientViewManager : SimpleViewManager<View>() {
  override fun getName() = "GradientView"

  override fun createViewInstance(reactContext: ThemedReactContext): View {
    return createComposeView(reactContext)
  }

  private fun createComposeView(context: Context) : View {
    return ComposeView(context).apply {
      setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
      setContent {
        Text(text = "linear")
      }
    }
  }
//  @ReactProp(name = "color")
//  fun setColor(view: View, color: String) {
//    view.setBackgroundColor(Color.parseColor(color))
//  }
}
