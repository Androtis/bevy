(function() {var type_impls = {
"bevy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ImageCopyBufferBase%3CB%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ImageCopyBufferBase%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy/render/render_resource/struct.ImageCopyBufferBase.html\" title=\"struct bevy::render::render_resource::ImageCopyBufferBase\">ImageCopyBuffer</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy/render/render_resource/struct.ImageCopyBufferBase.html\" title=\"struct bevy::render::render_resource::ImageCopyBufferBase\">ImageCopyBuffer</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy::render::render_resource::ImageCopyBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ImageCopyBufferBase%3CB%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ImageCopyBufferBase%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bevy/render/render_resource/struct.ImageCopyBufferBase.html\" title=\"struct bevy::render::render_resource::ImageCopyBufferBase\">ImageCopyBuffer</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bevy::render::render_resource::ImageCopyBuffer"],["<section id=\"impl-Copy-for-ImageCopyBufferBase%3CB%3E\" class=\"impl\"><a href=\"#impl-Copy-for-ImageCopyBufferBase%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"bevy/render/render_resource/struct.ImageCopyBufferBase.html\" title=\"struct bevy::render::render_resource::ImageCopyBufferBase\">ImageCopyBuffer</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section>","Copy","bevy::render::render_resource::ImageCopyBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-ImageCopyBufferBase%3CB%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-ImageCopyBufferBase%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"bevy/render/render_resource/struct.ImageCopyBufferBase.html\" title=\"struct bevy::render::render_resource::ImageCopyBufferBase\">ImageCopyBuffer</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.194/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bevy::render::render_resource::ImageCopyBuffer"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()