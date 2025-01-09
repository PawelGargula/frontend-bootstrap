resource "aws_s3_bucket" "frontend_bootstrap_10" {
  bucket              = "frontend-bootstrap-10"
  bucket_prefix       = null
  force_destroy       = null
  object_lock_enabled = false
  tags = {
    Feature = "Website"
  }
  tags_all = {
    Feature = "Website"
  }
}
