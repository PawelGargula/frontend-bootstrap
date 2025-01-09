import {
  to = aws_s3_bucket.frontend_bootstrap_10
  id = "frontend-bootstrap-10"
}

import {
  to = aws_cloudfront_distribution.frontend_bootstrap_10_cdn
  id = "E1CKAPFXNJI750"
}

# terraform plan --generate-config-out=generated.tf
