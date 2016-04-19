defmodule Formic.PageController do
  use Formic.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
